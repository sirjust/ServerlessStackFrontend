export default {
    s3: {
        REGION: "us-west-2",
        BUCKET: "jm-notes-bucket"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://wl2m7ady2j.execute-api.us-west-2.amazonaws.com/prod/notes"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_z1m2lLr7g",
        APP_CLIENT_ID: "2ktf0gft0mdolvhb5lbc3kkf8h",
        IDENTITY_POOL_ID: "us-east-1:171e65b5-50f0-4d68-94cd-d4df47884aa9"
    }
};