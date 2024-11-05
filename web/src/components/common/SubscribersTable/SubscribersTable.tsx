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

  const exportToCSV = () => {
    if (!selectedSubscriber) return // Do nothing if no subscriber is selected

    const csvData = [
      [
        'Imię',
        'Wiek',
        'Cholesterol',
        'Email',
        'Płeć',
        'Wysokość (cm)',
        'Waga (kg)',
        'Ciśnienie',
        'Palenie',
        'Telefon'
      ],
      [
        selectedSubscriber.name || 'Unnamed Subscriber',
        selectedSubscriber.age,
        selectedSubscriber.cholesterol,
        selectedSubscriber.email || 'Brak maila',
        selectedSubscriber.gender === 'female' ? 'Kobieta' : 'Mężczyzna',
        selectedSubscriber.height,
        selectedSubscriber.weight,
        selectedSubscriber.pressure,
        selectedSubscriber.isSmoking ? 'Tak' : 'Nie',
        selectedSubscriber.phone
      ]
    ]

    const csvContent = csvData.map(row => row.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', `${selectedSubscriber.name || 'subscriber'}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
              <TableCell>Email</TableCell>
              <TableCell>Płeć</TableCell>
              <TableCell>Wysokość (cm)</TableCell>
              <TableCell>Waga (kg)</TableCell>
              <TableCell>Ciśnienie</TableCell>
              <TableCell>Palenie</TableCell>
              <TableCell>Telefon</TableCell>
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
                  <TableCell>{subscriber.email || 'Brak maila'}</TableCell>
                  <TableCell>{subscriber.gender === 'female' ? 'Kobieta' : 'Mężczyzna'}</TableCell>
                  <TableCell>{subscriber.height}</TableCell>
                  <TableCell>{subscriber.weight}</TableCell>
                  <TableCell>{subscriber.pressure}</TableCell>
                  <TableCell>{subscriber.isSmoking ? 'Tak' : 'Nie'}</TableCell>
                  <TableCell>{subscriber.phone}</TableCell>
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
          onClick={exportToCSV}
          sx={{ position: 'fixed', bottom: 20, right: 20 }}
        >
          Export to CSV
        </Button>
      )}
    </Box>
  )
}
