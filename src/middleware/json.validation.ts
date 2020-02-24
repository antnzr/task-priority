import Ajv from "ajv";


const schema = {
    "additionalProperties": true,
    "properties": {
        "name": {
            "type": "string",
            "minLength": 3,
            "maxLength": 255
        },
        "priority": {
            "type": "number",
            "maximum": 100,
            "minimum": 0,
        }
    }
};

export const validate = new Ajv().compile(schema);


