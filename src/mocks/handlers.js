import { rest } from "msw";

const baseURL = "https://drf-api-project-09507283eb85.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                "pk": 1,
                "username": "alex",
                "email": "alexander91elbert@gmail.com",
                "first_name": "",
                "last_name": "",
                "profile_id": 1,
                "profile_image": 
                    "https://res.cloudinary.com/dfqbtlccb/image/upload/v1/media/../default_profile_geybmp"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];