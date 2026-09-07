# Dokploy deployment

This project is packaged as a static Next.js export served by Nginx.

1. Create a Dokploy Application from the GitHub repository.
2. Select the `Dockerfile` build type and the `main` branch.
3. Set the application port to `80`.
4. Add the domain and enable HTTPS in Dokploy.
5. Deploy. The Docker health check verifies the site root is responding.

The repository also includes `docker-compose.yml` for a Dokploy Compose service. Use the `zenith` service and route the domain to container port `80`.
