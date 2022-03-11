import { List, SelectionMode, FieldType, ColumnType, ActionType } from 'react-declarative';

import { Add, Delete } from '@mui/icons-material';

import mock from '../../mock/persons.js';

const filters = [
    {
        type: FieldType.Text,
        name: 'firstName',
        title: 'First name',
    },
    {
        type: FieldType.Text,
        name: 'lastName',
        title: 'Last name',
    }
];

const columns = [
    {
        type: ColumnType.Text,
        field: 'id',
        headerName: 'ID',
        secondary: true,
        width: 'max(calc(100vw - 665px), 200px)',
    },
    {
        type: ColumnType.Compute,
        headerName: 'Full name',
        primary: true,
        compute: ({ firstName, lastName }) => `${firstName} ${lastName}`,
        width: '200px',
    },
    {
        type: ColumnType.Component,
        headerName: 'Component',
        element: () => htm`
            <div>
                Custom cell Component
            </div>
        `,
        width: '200px',
    },
    {
        type: ColumnType.Action,
        headerName: 'Actions',
        sortable: false,
        width: '150px',
    },
];

const actions = [
    {
        type: ActionType.Add,
    },
    {
        type: ActionType.Menu,
        options: [
            {
                action: 'add-action',
                label: 'Create new row',
                icon: Add,
            },
            {
                action: 'update-now',
            },
            {
                action: 'auto-reload',
            },
            {
                action: 'mobile-view',
            },
        ],
    }
];

const rowActions = [
    {
        label: 'Remove action',
        action: 'remove-action',
        icon: Delete,
    },
];

export const ListPage = () => {

    const handler = mock;

    const heightRequest = () => window.innerHeight - 180;

    const handleColumnMenuClick = (action) => {
        alert(action);
    };

    const handleRowActionsClick = (row, action) => {
        alert(JSON.stringify({ row, action }, null, 2));
    };

    const handleAction = (action) => {
        alert(action);
    };

    const handleClick = (row) => {
        alert(JSON.stringify({ row }, null, 2));
    };

    return htm`
        <${List}
            title="List Component"
            filterLabel="Filters"
            heightRequest=${heightRequest}
            rowActions=${rowActions}
            actions=${actions}
            filters=${filters}
            columns=${columns}
            handler=${handler}
            selectionMode=${SelectionMode.Single}
            onColumnMenuAction=${handleColumnMenuClick}
            onRowAction=${handleRowActionsClick}
            onRowClick=${handleClick}
            onAction=${handleAction}
        />
    `;
};

export default ListPage;
