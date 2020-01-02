import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Standings from "../components/standings/2019-2020"

export default ({ data }) => (
  <Layout>
    <Standings standings={data.allMongodbSuperleagueStandings.edges} />
  </Layout>
)

export const query = graphql`
query{
   allMongodbSuperleagueStandings {
    edges {
      node {
        rank
        teamName
        all {
          draw
          goalsAgainst
          goalsFor
          lose
          matchsPlayed
          win
        }
        goalsDiff
        points
      }
    }
  }
}
`