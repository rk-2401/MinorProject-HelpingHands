import { truncate } from "fs-extra";
import { configure, getLogger } from "log4js";
import { config } from './../config/environment';

configure({
    appenders: {
        console: { type: 'stdout', layout: { type: "colored" } },
        dateFile: {
            type: 'dateFile',
            filename: `${config.logDir}/${config.logFile}`,
            layout: { type: "basic" },
            compress: true,
            daysToKeep: 14,
            keepFileExt: true
        }
    },
    categories: {
        default: { appenders: ['console', 'dateFile'], level: config.logLevel }
    }
});

export const logger = getLogger();