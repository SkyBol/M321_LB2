using System.ComponentModel;
using Duende.IdentityServer;
using Duende.IdentityServer.Models;
using IdentityModel;

namespace IdentityServerAspNetIdentity;

public static class Config
{
    public static IEnumerable<IdentityResource> IdentityResources =>
        new[]
        {
            new IdentityResources.OpenId(),
            new IdentityResources.Profile(),
            new IdentityResource
            {
                Name = "verification",
                UserClaims = new List<string> 
                { 
                    JwtClaimTypes.Email,
                    JwtClaimTypes.EmailVerified
                }
            }
        };

    public static IEnumerable<ApiScope> ApiScopes =>
        new[]
        { 
            new ApiScope(name: "cocktail", displayName: "Cocktail Backend"),
            new ApiScope(name: "bottle",  displayName: "Bottle Backend")
        };

    public static IEnumerable<Client> Clients =>
        new[] 
        {
            new Client
            {
                ClientId = "web",
                AllowedGrantTypes = GrantTypes.Code,
                RequirePkce = true,
                RedirectUris = { "http://localhost:5173/login/successfull" },
                PostLogoutRedirectUris = { "http://localhost:5173/logout/successfull" },
                AllowedScopes = { "openid", "profile", "cocktail", "bottle" },
                RequireClientSecret = false,
                AllowAccessTokensViaBrowser = true,
                AllowedCorsOrigins = { "http://localhost:5173" }
            }
        };
}