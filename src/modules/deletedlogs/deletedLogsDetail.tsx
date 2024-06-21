'use client'

import React from 'react';
import { Button } from "@/components/ui/button"

import { apiEndPoint, colors } from '@/utils/colors';
import axios from 'axios';

import {useState, useEffect} from 'react';
import { TicketDeletion } from "@/components/component/ticket-deleted";

import { toast } from 'react-hot-toast';
import { Undo2, CircleSlash2, CircleSlash, Check  } from "lucide-react";

import { useContext } from 'react';
import { DeletedLogsContext } from './deletedLogsModule';

interface EachTicketsProps {
    onClose: () => void;
}

//type ResponseType = CheckProps[]

export const EachDeletedTicketsModule = ({ onClose }: EachTicketsProps) => {
    const deletedlog = useContext(DeletedLogsContext);

    if (!deletedlog) {
        return <div>No data available</div>;
    }

    const [deletePopUp, setDeletePopUp] = useState(false);
    const [deletionId, setDeletionId] = useState(0);


    const toggleDeletePage = () => {
        setDeletePopUp(!deletePopUp);
    }


    return (
    <>
    {deletePopUp && <TicketDeletion callId={deletionId} onClose={toggleDeletePage} />}
        <div className="p-4 bg-white">
                <h2 className="mb-2 text-xl font-semibold">Ticket Information</h2>
                <div className="flex flex-wrap">
                    <div className="w-1/3">
                        <div>
                            <p className="font-medium text-gray-500 text-md">Call ID</p>
                            <p className="font-semibold text-md">{deletedlog.Call_ID}</p>
                        </div>
                        <div className="mb-4 mt-4">
                            <p className="font-medium text-gray-500 text-md">Employee</p>
                            <p className="font-semibold text-md">{deletedlog.Employee || '--:--'}</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-medium text-gray-500 text-md">Support No</p>
                            <p>{deletedlog.SupportNumber || '--:--'}</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-500 text-md">IssueType</p>
                            <p className="font-semibold text-md">{deletedlog.IssueType || '--:--'}</p>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="mb-4">
                            <p className="font-medium text-gray-500 text-md">Customer</p>
                            <p className="font-semibold text-md">{deletedlog.Customer}</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-medium text-gray-500 text-md">Problem</p>
                            <p className="font-semibold text-md">{deletedlog.Problem || '--:--'}</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-medium text-gray-500 text-md">Start Time</p>
                            <p>{new Date(deletedlog.Start_Time).toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="mb-4">
                            <p className="font-medium text-gray-500 text-md">Client Name</p>
                            <p className="font-semibold text-md">{deletedlog.Client_Name || '--:--'}</p>
                        </div>
                        <div className="mb-4 mt-4">
                            <p className="font-medium text-gray-500 text-md">Phone Number</p>
                            <p className="font-semibold text-md">{deletedlog.Phone_Number || '--:--'}</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-medium text-gray-500 text-md">Comments</p>
                            <p className="font-semibold text-md">{deletedlog.Comments || '--:--'}</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-5 gap-4">
                        <Button className="mr-2 bg-green">Undo</Button>
                        <Button onClick={onClose} className="mr-2 bg-orange">Close</Button>
                    </div>
                </div>
            </div>
    </>
    );
}