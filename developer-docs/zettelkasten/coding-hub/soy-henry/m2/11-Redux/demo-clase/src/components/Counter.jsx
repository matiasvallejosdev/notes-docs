import { Button, Result } from "antd";

export default function Counter({counter, increment, decrement}){
    return (
        <Result 
        title="Este es un contador de ejemplo"
        subtitle={`El contador es ${counter}`}
        extra={[<Button type="primary" key="inc">+</Button>, <Button type="primary" key="des">-</Button>]}
        />
    )
}