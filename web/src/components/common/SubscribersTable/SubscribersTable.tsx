import React, { useMemo, useState } from 'react'
import { Subscriber } from '@/entities/Subscriber'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TableSortLabel,
  Box
} from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import generatePDF from '@/utils/generatePDF'
import { calculateBMI } from '@/utils/calculateBMI'
import { calculateScore } from '@/utils/calculateScore'

export default function SubscribersTable({ subscribers }: { subscribers: Subscriber[] }) {
  type OrderBy = 'name' | 'bmi' | 'score' | 'phone' | 'address' | ''

  const [selectedSubscriber, setSelectedSubscriber] = useState<Subscriber | null>(null)

  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [orderBy, setOrderBy] = useState<OrderBy>('')

  const handleRequestSort = (property: OrderBy) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }
  const parseAddress = (subscriber: Subscriber): string => {
    return `${subscriber.town}, ${subscriber.postalCode}, ul. ${subscriber.streetName} ${subscriber.houseNumber}${subscriber.localNumber ? ` nr. lokalu ${subscriber.localNumber}` : ''}`
  }

  function descendingComparator(a: Subscriber, b: Subscriber, orderBy: OrderBy) {
    let valueA
    let valueB

    if (orderBy === 'bmi') {
      valueA = calculateBMI(a)
      valueB = calculateBMI(b)
    } else if (orderBy === 'score') {
      valueA = calculateScore(a)
      valueB = calculateScore(b)
    } else if (orderBy === 'address') {
      valueA = parseAddress(a)
      valueB = parseAddress(b)
    } else {
      valueA = a['phone']
      valueB = b['phone']
    }

    if (valueB < valueA) {
      return -1
    }
    if (valueB > valueA) {
      return 1
    }
    return 0
  }

  function getComparator(order: 'asc' | 'desc', orderBy: OrderBy) {
    return order === 'desc'
      ? (a: Subscriber, b: Subscriber) => descendingComparator(a, b, orderBy)
      : (a: Subscriber, b: Subscriber) => -descendingComparator(a, b, orderBy)
  }

  const sortedSubscribers = useMemo(
    () => subscribers.slice().sort(getComparator(order, orderBy)),
    [subscribers, order, orderBy]
  )

  const handleRowClick = (subscriber: Subscriber) => {
    setSelectedSubscriber(subscriber)
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="subscriber table">
          <TableHead>
            <TableRow>
              <TableCell sortDirection={orderBy === 'name' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleRequestSort('name')}
                >
                  Imię i nazwisko
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === 'address' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'address'}
                  direction={orderBy === 'address' ? order : 'asc'}
                  onClick={() => handleRequestSort('address')}
                >
                  Adres
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === 'bmi' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'bmi'}
                  direction={orderBy === 'bmi' ? order : 'asc'}
                  onClick={() => handleRequestSort('bmi')}
                >
                  BMI
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === 'score' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'score'}
                  direction={orderBy === 'score' ? order : 'asc'}
                  onClick={() => handleRequestSort('score')}
                >
                  Score
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === 'phone' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'phone'}
                  direction={orderBy === 'phone' ? order : 'asc'}
                  onClick={() => handleRequestSort('phone')}
                >
                  Tel
                </TableSortLabel>
              </TableCell>
              <TableCell>PDF</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="cursor-pointer">
            {sortedSubscribers.length !== 0 ? (
              sortedSubscribers.map(subscriber => (
                <TableRow
                  key={subscriber.id}
                  hover
                  onClick={() => handleRowClick(subscriber)}
                  selected={selectedSubscriber?.id === subscriber.id}
                >
                  <TableCell>{subscriber.name || 'Unnamed Subscriber'}</TableCell>
                  <TableCell>{parseAddress(subscriber)}</TableCell>
                  <TableCell>{calculateBMI(subscriber)}</TableCell>
                  <TableCell>{calculateScore(subscriber)}</TableCell>
                  <TableCell>{subscriber.phone}</TableCell>
                  <TableCell onClick={() => generatePDF(subscriber)}>
                    <DownloadIcon />
                  </TableCell>
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
