import { createContext, ReactNode, useContext } from "react";
import { useAppwrite } from "./useAppwrite";
import { getUser } from "./appwrite";


interface GlobalContextType{
    isLogged: boolean;
    user: User|null;
    loading:boolean;
    refetch: () => void;
}
interface User{
    $id:string;
    name:string;
    email:string;
    avatar:string;
}
const GlobalContext = createContext<GlobalContextType |undefined>(undefined)
interface GlobalProviderProps{
    children:ReactNode;
}
export const GlobalProvider = ({children}:GlobalProviderProps) => {
    const {
        data:user,
        loading,
        refetch,
    } = useAppwrite({
        fn: getUser,
    })
    const isLogged = !!user;
    return(
        <GlobalContext.Provider
            value = {{
                isLogged,
                user,
                loading,
                refetch,
            }}>
                {children}
            </GlobalContext.Provider>
    )

}
export const useGlobalContext = () : GlobalContextType =>{
    const context = useContext(GlobalContext);
    if(!context)
        throw new Error ("useGlobalContext must be used within Global Provider")
    return context
}
export default GlobalProvider