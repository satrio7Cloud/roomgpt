import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({})

export const cinfig = {
    matcher: ['/room']
}