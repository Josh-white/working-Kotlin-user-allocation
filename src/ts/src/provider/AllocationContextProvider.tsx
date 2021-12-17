import {useTeam} from "../hooks/useTeam";
import {usePeople} from "../hooks/usePeople";
import React, {createContext} from "react";

interface AllocationContextProps {
  team: ReturnType<typeof useTeam>,
  people: ReturnType<typeof usePeople>
}
//TODO change this and spell out all the types so that it throws errors that will help a dev if they try to use context without a provider.

const AllocationContext = createContext<AllocationContextProps>({} as any)

const AllocationProvider: React.FC = ({children}) => {
  const team = useTeam()
  const people = usePeople()

  return (
    <AllocationContext.Provider
      value={{team, people}}>
      {children}
    </AllocationContext.Provider>
  )
}

export const useAllocation = () => {
  const context = React.useContext(AllocationContext)
  return {...context.team, ...context.people}
}

export {AllocationProvider}