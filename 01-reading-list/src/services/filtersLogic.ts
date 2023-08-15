import { ALL_FILTER } from '../consts/filters'

export function deleteFilters(setFilters: React.Dispatch<React.SetStateAction<{ PAGES: number, GENRE: string }>>, filters) {
    setFilters({ ...filters, GENRE: ALL_FILTER })
    localStorage.setItem('filters', JSON.stringify({ ...filters, GENRE: ALL_FILTER }))
}

export function updateFilters(setFilters: React.Dispatch<React.SetStateAction<{ PAGES: number, GENRE: string }>>, filters, filter: string, value: string | number) {
    setFilters({ ...filters, [filter]: value })
    localStorage.setItem('filters', JSON.stringify({ ...filters, [filter]: value }))
}