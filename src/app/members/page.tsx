import React from 'react';
import { getMembers } from '../actions/memberActions';
import MemberCard from './MemberCard';

export default async function MembersPage() {
    const members = await getMembers();
    return (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {members && members.map((member) => <MemberCard key={member.id} member={member} />)}
        </div>
    );
}
