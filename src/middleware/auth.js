import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({
            error: "No token, Auth Denied. Please Login"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user.id = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({
            error: 'Token is not valid'
        });
    }
}