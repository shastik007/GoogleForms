import React from 'react'
import { useSelector } from 'react-redux'
import { TestItem } from './TestItem'

export const TestList = () => {
   const tests = useSelector((state) => state.tests)
   return (
      <div>
         {tests.map((test) => {
            return (
               <TestItem
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
