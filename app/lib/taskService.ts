import axios from 'axios';

const API_URL = "https://nest-course-app.vercel.app/task";

export const fetchTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error ('Error fetching tasks:', error);
        return [];
    }
};