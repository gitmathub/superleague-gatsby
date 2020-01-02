import React from 'react'

export default ({ standings }) => (
  <article className="standings__article">
    <table className="standings__table">
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>MP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
      </thead>
      <TableBody standings={standings} />
    </table>
  </article>
)

const TableBody = ({ standings }) => (
  <tbody>
    {standings.map(({ node }, index) => (
      <ListItem teamData={node} key={index} />
    ))}
  </tbody>
)


const ListItem = ({ teamData }) => {
  const { rank, teamName, goalsDiff, points } = teamData
  const { matchsPlayed, win, draw, lose, goalsFor, goalsAgainst } = teamData.all

  return (
    <tr>
      <td>{rank}</td>
      <td>{teamName}</td>
      <td>{matchsPlayed}</td>
      <td>{win}</td>
      <td>{draw}</td>
      <td>{lose}</td>
      <td>{goalsFor}</td>
      <td>{goalsAgainst}</td>
      <td>{goalsDiff}</td>
      <td>{points}</td>
    </tr>
  )
}