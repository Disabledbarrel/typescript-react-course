import { ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC color="red" onClick={()=>console.log('clicked')}>
        komponentbarnet
    </ChildAsFC>
}

export default Parent;