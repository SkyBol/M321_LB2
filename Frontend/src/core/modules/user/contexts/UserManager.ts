import { UserManager, WebStorageStateStore } from "oidc-client-ts";

const oidcConfig = {
    authority: "https://localhost:5001",
    client_id: "web",
    redirect_uri: "http://localhost:5173/",
    post_logout_redirect_uri: "http://localhost:5173/",
    response_type: "code",
    scope: "bottle",
    userStore: new WebStorageStateStore({ store: window.localStorage })
};

const userManager = new UserManager(oidcConfig);

export default userManager;

export const getAccessToken = async () => {
    const user = await userManager.getUser();
    return user?.access_token;
};
