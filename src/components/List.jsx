import React, { Component } from 'react';
import Table from './table/Table';
import Tbody from './table/Tbody';
import Tr from './table/Tr';
import Th from './table/Th';
import Thead from './table/Thead';
import { getAll } from '../services/heroes.services';
import Td from './table/Td';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { data: getAll }

    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <Table >
                    <Thead>
                        <Tr >
                            <Th>Name</Th>
                            <Th>Race</Th>
                            <Th>Age</Th>
                            <Th>Weapon</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((e, i) => (
                            <Tr key={i}>
                                <Td>{e.name}</Td>
                                <Td>{e.race}</Td>
                                <Td>{e.age}</Td>
                                <Td>{e.weapon}</Td>

                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </div>
        );
    }
}

export default List;