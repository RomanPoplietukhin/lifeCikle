import { Component } from 'react'
import faker from 'faker';
import propTypes from 'prop-types';


export class Ship extends Component {
    render() {
        const { 
            
            name, 
            model,
            max_atmosphering_speed,
            manufacturer,
            length,
            films,
            edited,
            crew,
            created,
            cost_in_credits,
            consumbles,
            cargo_capacity,
            passengers,
            pilots,
            vehicle_class

         } = this.props.data

        return(
            <div className='card-container'>
                <h2 className='vehicle-name'> <b>Name:</b> { name } </h2>
                <p className="vehicle-model"> <b>Model:</b> { model  }</p>
                <p className="vehicle-max_atmosphering_speed"> <b>MaxSpeed:</b> { max_atmosphering_speed  }</p>
                <p className="vehicle-manufacturer"> <b>Manufacturer:</b> { manufacturer }</p>
                <p className="vehicle-length"> <b>Length:</b> { length }</p>
                { films && films.map(film => (
                    <ul className="films-list" key={ faker.datatype.uuid() }>
                    <li className="films-list__item">
                        { film }
                    </li>
                    </ul>
                )) }
                <p className="vehicle-edited"> <b>Edited:</b> { edited }</p>
                <p className="vehicle-crew"> <b>Crew:</b> { crew }</p>
                <p className="vehicle-created"> <b>Created:</b> { created }</p>
                <p className="vehicle-cost_in_credits"> <b>Costs:</b> { cost_in_credits }</p>
                <p className="vehicle-consumbles"> <b>Consumbles:</b> { consumbles }</p>
                <p className="vehicle-cargo_capacity"> <b>Capacity:</b> { cargo_capacity }</p>
                <p className="vehicle-passengers-count"> <b>Passengers count:</b> { passengers }</p>
                { pilots && pilots.map(film => (
                    <ul className="pilots-list" key={ faker.datatype.uuid() }>
                    <li className="pilots-list__item">
                        { film }
                    </li>
                    </ul>
                )) }
                <p className="vehicle-class"> <b>Class:</b> { vehicle_class }</p>

            </div>
        )
    }
}

Ship.propTypes = {
    data: propTypes.shape({
          name: propTypes.string,
          model: propTypes.string,
          max_atmosphering_speed: propTypes.string,
          manufacturer: propTypes.string,
          length: propTypes.string,
          films: propTypes.arrayOf(propTypes.string),
          edited: propTypes.string,
          crew: propTypes.string,
          created: propTypes.string,
          cost_in_credits: propTypes.string,
          consumbles: propTypes.string,
          cargo_capacity: propTypes.string,
          passengers: propTypes.string,
          pilots: propTypes.arrayOf(propTypes.string),
          vehicle_class: propTypes.string,

    })
};