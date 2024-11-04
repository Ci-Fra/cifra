import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const [counter, setCounter] = useState(5);
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(timeout);
        };
    }, [navigate]);
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4 text-foreground">404 - Pagina Non Trovata</h1>
      <p className="text-xl mb-8 text-muted-foreground">Ci dispiace, la pagina che stai cercando non esiste.</p>
      <p className="text-xl mb-8 text-muted-foreground">Verrai reindirizzato alla home tra {counter} secondi.</p>
      <Button asChild>
        <a href="/">Torna alla Home</a>
      </Button>
    </div>
  )
}
export { NotFound }