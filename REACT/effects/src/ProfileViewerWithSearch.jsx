import axios from 'axios';
import { useEffect, useState } from 'react';
import ProfileSearchForm from './ProfileSearchForm';

const BASE_URL = "https://api.github.com/users";

/* GitHub Profile Component - shows info from GH API */

export default function ProfileViewWithSearch() {
    const [username, setUsername] = useState("thaibinhbr97");
    const [profile, setProfile] = useState({ data: null, isLoading: true });

    useEffect(
        function fetchUserOnUsernameChange() {
            async function fetchUser() {
                const userResult = await axios.get(`${BASE_URL}/${username}`);
                setProfile({ data: userResult.data, isLoading: false });
            }
            fetchUser();
        },
        [username]
    );

    function search(username) {
        setProfile({ data: null, isLoading: true });
        setUsername(username);
    }

    if (profile.isLoading) return <i>Loading...</i>;

    return (
        <div>
            <h1>Github Profile Search</h1>
            <ProfileSearchForm search={search} />
            <br />
            <b>{profile.data.name}</b>
            <br />
            <br />
            <img src={profile.data.avatar_url} alt="" />
        </div>
    )
}
