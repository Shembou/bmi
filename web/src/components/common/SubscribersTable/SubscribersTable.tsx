import React, { useState } from 'react'
import { Subscriber } from '@/entities/Subscriber'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box
} from '@mui/material'

export default function SubscribersTable({ subscribers }: { subscribers: Subscriber[] }) {
  const [selectedSubscriber, setSelectedSubscriber] = useState<Subscriber | null>(null)

  const handleRowClick = (subscriber: Subscriber) => {
    setSelectedSubscriber(subscriber)
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="subscriber table">
          <TableHead>
            <TableRow>
              <TableCell>Imię</TableCell>
              <TableCell>Wiek</TableCell>
              <TableCell>Cholesterol</TableCell>
              <TableCell>Wysokość (cm)</TableCell>
              <TableCell>Waga (kg)</TableCell>
              <TableCell>Ciśnienie</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="cursor-pointer">
            {subscribers.length !== 0 ? (
              subscribers.map(subscriber => (
                <TableRow
                  key={subscriber.id}
                  hover
                  onClick={() => handleRowClick(subscriber)}
                  selected={selectedSubscriber?.id === subscriber.id} // Highlight selected row
                >
                  <TableCell>{subscriber.name || 'Unnamed Subscriber'}</TableCell>
                  <TableCell>{subscriber.age}</TableCell>
                  <TableCell>{subscriber.cholesterol}</TableCell>
                  <TableCell>{subscriber.height}</TableCell>
                  <TableCell>{subscriber.weight}</TableCell>
                  <TableCell>{subscriber.pressure}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} align="center">
                  Brak subskrybentów
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedSubscriber && (
        <Button
          variant="contained"
          color="primary"
          href={`/subscribers/${selectedSubscriber.id}`}
          sx={{ position: 'fixed', bottom: 20, right: 20 }}
        >
          Zobacz szczegóły
        </Button>
      )}
    </Box>
  )
}
