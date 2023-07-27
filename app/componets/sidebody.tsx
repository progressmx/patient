type Children = 
{
    children : React.ReactNode
}

export default function SideBody(props : Children) {
  return (
    <div className="flex flex-col p-3 gap-6">
        {props.children}
    </div>
  )
}
