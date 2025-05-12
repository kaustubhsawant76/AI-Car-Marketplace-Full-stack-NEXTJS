/** @type {import('next').NextConfig} */
const nextConfig = {
    async Headers(){
        return [
            {
                source:"/embed",
                headers:[
                   { key:"Content-Security-Policy",
                    value:"frame src 'self' https://vehiql-waitlist-feature.created.app/",
                   }
                ]
            }
        ]
    }
};

export default nextConfig;
