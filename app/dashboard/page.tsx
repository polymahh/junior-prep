import ChartCard from "@/components/chartCard"
import CoursesList from "@/components/coursesList"
import ProfileCard from "@/components/profileCard"
import TeamDashboardList from "@/components/teams/TeamsDashboardList"

const Dashboard = () => {
    return (
        <div className="container max-w-[1440px] px-2 sm:px-4 flex flex-col gap-4 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_300px] auto-rows-[minmax(160px,auto)]  gap-4">
                <div className=" col-span-1  lg:col-span-2 ">
                    <ProfileCard />
                </div>
                <div className="min-h-[300px]">
                    <ChartCard />
                </div>
                <div className="lg:row-start-2 row-span-2  lg:col-start-2">
                    <CoursesList />
                </div>
                <div className="lg:row-start-3 lg:col-start-1">
                    <TeamDashboardList />
                </div>
            </div>
        </div>
    )
}
export default Dashboard
