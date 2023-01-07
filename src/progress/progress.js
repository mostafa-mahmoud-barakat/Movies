  export default function Progress (prop) {

console.log(prop)
          return (
            <>
           <div className="progress my-3">
           <span className="px-1">{prop.name}</span>
                        <div className="progress-bar" role="progressbar"
                         style={prop.style} aria-valuenow="0" aria-valuemin="0"
                          aria-valuemax="100">
                            
                          </div>
                        </div>
                        
            </>
            
          );
          

      }
    
