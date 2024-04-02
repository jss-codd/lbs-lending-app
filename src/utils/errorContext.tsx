import { useContext } from 'react'
import { GlobalErrorContext } from '../pages/_app'

export default function useErrorState(){
    return useContext(GlobalErrorContext)
}