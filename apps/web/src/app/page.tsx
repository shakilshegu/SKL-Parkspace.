"use client"
import { add } from '@skl-autospace/sample-lib'
import { CompaniesDocument } from '@skl-autospace/network/src/gql/generated'
import { useQuery } from '@apollo/client'

export default function Home() {
  const {data} = useQuery(CompaniesDocument)
  return (
    <div>
      <h1>Hello world Frond-end {add(33, 20)}</h1>
      <div>
        {data?.companies.map(company => <div key={company.id}>
           {company.displayName}
        </div>)}
      </div>
    </div>
  )
}
