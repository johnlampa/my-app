import MainButton from "./MainButton";


export default function Content() {
  return (
    <>
    
    <div className="flex-column-center">
        <div className="flex-row-centered">
            <div className="flex-row-responsive">
            <div style={{ width: '300px', height: '200px' }}>
              {/* Image with the class applied */}
              <img 
                src="/assets/pokedex2.png" 
                alt="Pokedex" 
                className="pokedex-image"
              />
            </div>
                <div className="text-responsive">
                    <div className="flex-row-centered-responsive padding-top">
                    <p className="big-text white-text">Catch 'Em All!</p>
                    </div>
                    <div className="flex-row-centered-responsive">
                        <p className="small-text white-text">Explore with Our Interactive Pokedex</p>
                    </div>
                    <MainButton></MainButton>
                </div>
                
            </div>
        </div>
    </div>
    
      
    </>
  );
}