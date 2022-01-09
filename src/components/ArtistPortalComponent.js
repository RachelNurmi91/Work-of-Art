import React from 'react';
import { Card, CardTitle, CardBody, CardImg, Container, Row, Col } from 'reactstrap';
import CardGroup from 'reactstrap/lib/CardGroup';


function RenderUnits({unit}) {
    return (
 
            <div className="container">
                <div className="row ">
                    <div className="col">
                            <Card>
                                <CardImg width="100%" src={unit.image} alt={unit.name} />
                                <CardTitle>
                                    <h2>{unit.name}</h2>
                                    </CardTitle>
                                <CardBody>
                                    
                                    {unit.description}
                                </CardBody>
                            </Card>
                    </div>
                </div>
            </div>
    )
}

function ArtistPortal(props) {   
    const unitDirectory = props.units.map(unit => {
        return(
            <div key={unit.id} className="col-md-4 mb-4 mx-auto">
                <RenderUnits unit={unit} />
            </div>
            );
        }
    );    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Artist Portal</h2>
                    <p>Some introductory text</p>
                    <hr />
                </div>
            </div>
            <div className="row">
                     {unitDirectory}
            </div>
        </div>
    );
    }
    
      
       


export default ArtistPortal;