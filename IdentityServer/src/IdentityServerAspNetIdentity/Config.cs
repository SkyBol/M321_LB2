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
                /*
                 * Non-interactive login from the "Bottle Backend" to the "Cocktail Backend"
                 */
                ClientId = "bottle_backend",
                ClientSecrets = { new Secret("bottles_are_super_124".Sha256()) },
                AllowedGrantTypes = GrantTypes.ClientCredentials,
                AllowedScopes = { "cocktail" },
                
            },
            new Client
            {
                /*
                 * Interactive login from the frontend to the "Bottle Backend"
                 */
                ClientId = "web",
                AllowedGrantTypes = GrantTypes.Code,
                RedirectUris = { "https://localhost:8081/*" },
                PostLogoutRedirectUris = { "https://localhost:5002/signout-callback-oidc" },
                AllowOfflineAccess = true,
                AllowedScopes = { "bottle" }
            }
        };
}