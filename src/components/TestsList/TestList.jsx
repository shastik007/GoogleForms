import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SaveLocalStorage } from '../../utils/helpers/helpers'
import { TestItem } from './TestItem'

export const TestList = () => {
   const tests = useSelector((state) => state.tests)
   useEffect(() => {
      SaveLocalStorage('tests/list', tests)
   }, [])
   return (
      <div>
         {tests.tests.map((test) => {
            return (
               <TestItem
                  key={test.id}
                  title={test.title}
                  description={test.description}
                  questions={test.questions}
                  id={test.id}
               />
            )
         })}
      </div>
   )
}
