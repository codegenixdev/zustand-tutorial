import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createUserSlice } from '@/store/user-slice';
import { Store } from '@/types/store';

import { createCartSlice } from './cart-slice';

export const useStore = create<Store>()(
	devtools(
		persist(
			subscribeWithSelector(
				immer((...a) => ({
					...createUserSlice(...a),
					...createCartSlice(...a),
				}))
			),
			{
				name: 'local-storage',
			}
		)
	)
);
