import React from 'react'
import { Trip } from '../../@types/Trip'
import { api } from '../../services/api'

export function Home() {
  const [trips, setTrips] = React.useState<Trip[]>([])

  React.useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips')

      setTrips(response.data)
      console.log(response.data)
    }

    loadApi()
  }, [])

  return (
    <div>
      <h2>Home</h2>
      <br />
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>
            <button onClick={() => {}}>Solicitar Reserva</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
