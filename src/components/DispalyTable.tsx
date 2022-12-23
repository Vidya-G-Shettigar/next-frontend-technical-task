import { Table } from 'antd';

import { IMusicData } from '../store/interfaces';

// component to display music data in antd table
export default function DisplayTable({ musicDataList, isLoading }: { musicDataList: IMusicData[], isLoading: boolean }) {

    const columns = [
        {
            title: "",
            dataIndex: "artworkUrl60",
            width: "10%",
            render: (artworkUrl60: string) => <img alt={artworkUrl60} src={artworkUrl60} />
        },
        {
            title: "Artist",
            dataIndex: "artistName",
            width: "30%"
        },
        {
            title: "Album",
            dataIndex: "collectionName",
            width: "40%"
        },
        {
            title: "Song",
            dataIndex: "trackName",
            width: "20%"
        }
    ];

    return (
        <Table
            columns={columns}
            dataSource={musicDataList}
            pagination={false}
            loading={isLoading}
        />
    );
};
