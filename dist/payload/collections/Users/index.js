"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Users = {
    slug: "users",
    auth: true,
    admin: {
        useAsTitle: "email",
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
    ],
};
exports.default = Users;
