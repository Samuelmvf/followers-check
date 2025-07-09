import { User } from "lucide-react";

interface FollowerItemProps {
  username: string;
  timeFollowing: string;
  status: string;
  variant?: "red" | "purple" | "blue";
}

const VARIANT_STYLES = {
  red: {
    container: "bg-red-50 border-l-4 border-red-400",
    avatar: "bg-gradient-to-r from-red-400 to-red-600",
    timeColor: "text-red-600",
  },
  purple: {
    container: "bg-purple-50 border-l-4 border-purple-400",
    avatar: "bg-gradient-to-r from-purple-400 to-purple-600",
    timeColor: "text-purple-600",
  },
  blue: {
    container: "bg-blue-50 border-l-4 border-blue-400",
    avatar: "bg-gradient-to-r from-blue-400 to-blue-600",
    timeColor: "text-blue-600",
  },
} as const;

const FollowerItem = ({ username, timeFollowing, status, variant = "blue" }: FollowerItemProps) => {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className={`flex items-center justify-between p-3 rounded-lg ${styles.container}`}>
      <div className='flex items-center space-x-3'>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${styles.avatar}`}>
          <User className='w-5 h-5 text-white' />
        </div>
        <div>
          <div className='text-sm font-medium text-gray-900'>{username}</div>
          <div className={`text-xs ${styles.timeColor}`}>{timeFollowing}</div>
        </div>
      </div>
      <div className='text-xs text-gray-500'>{status}</div>
    </div>
  );
};

export default FollowerItem;
