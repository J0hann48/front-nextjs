/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return[
            {
                source: "/",
                destination: "/pronosticos",
                permanent: true
            }
        ]
    }
};

export default nextConfig;
