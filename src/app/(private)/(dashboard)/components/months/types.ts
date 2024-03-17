export interface DashboardMonthHookProps {
  modalVacationOpen: boolean
  setModalVacationOpen: (modal: boolean) => void
  daysSelected?: Date[]
  setDaysSelected: (day: Date[]) => void
  month?: number
  setMonth: (month: number) => void
  dayEditId: number
  setDayEditId: (id: number) => void
}
