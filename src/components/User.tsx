import { UserIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { useStore } from '@/store/store';

export function User() {
	const { setAddress, address, fullName, userName, fetchUser } = useStore(
		useShallow((state) => ({
			fullName: state.fullName,
			userName: state.userName,
			address: state.address,
			setAddress: state.setAddress,
			fetchUser: state.fetchUser,
		}))
	);

	useEffect(() => {
		async function fetchData() {
			await fetchUser();
		}

		fetchData();
	}, [fetchUser]);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="secondary" size="icon">
					<UserIcon />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="overflow-y-scroll space-y-2 w-96">
				<div className="flex items-center gap-2">
					<p>{fullName}</p>
					<p className="text-sm">{userName}</p>
				</div>
				<Label htmlFor="address">Your Address:</Label>
				<Input
					id="address"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
			</PopoverContent>
		</Popover>
	);
}
