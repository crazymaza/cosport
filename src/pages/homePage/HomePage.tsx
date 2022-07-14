import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { ALL_USERS } from '../../apollo/querys/user';

interface UserInterface {
    id: number,
    name: string,
    age: number,
}

const HomePage: React.FC = () => {
    const { loading, error, data } = useQuery(ALL_USERS);

    if (loading) {
        return <Skeleton animation="wave" variant="rectangular" width={210} height={50} />
    }

    if (error) {
        return <Typography>{error.cause?.stack}</Typography>
    }

    return (
        <Table sx={{ maxWidth: 300 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>User name</TableCell>
                    <TableCell>User age</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data?.users.map((user: UserInterface) => (
                    <TableRow
                        key={user.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {user.name}
                        </TableCell>
                        <TableCell>{user.age}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default HomePage;