// import Image from 'next/image'
// import styles from './page.module.css'
// import ToDo from '@/components/todo'
import ToDosCards from '@/components/cards'
import { Grid } from '@mui/material'
import {addPost} from '@/components/addPost'

export default function Home() {
  return (
    <>
      <addPost></addPost>
      <ToDosCards />
    </>
  )
}
