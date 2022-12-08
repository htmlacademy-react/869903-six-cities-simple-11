import {createAction} from '@reduxjs/toolkit';
import {CommentType} from '../../types/comments';
import {AuthorizationStatus} from '../../const';

export const sendComment = createAction<CommentType>('data/sendComment');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserEmail = createAction<string | null>('user/setEmail');

export const setError = createAction<string | null>('offer/setError');

