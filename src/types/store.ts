import { CartSlice } from '@/store/cart-slice';
import { UserSlice } from '@/store/user-slice';

export type Store = UserSlice & CartSlice;
