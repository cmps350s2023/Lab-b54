import AccountRepo from "../account-repo.js"
const repo = new AccountRepo()

export async function GET(request, { params }) {
    const { id } = params
    const account = await repo.getAccountById(id)
    return Response.json(account, { status: 200 })

}