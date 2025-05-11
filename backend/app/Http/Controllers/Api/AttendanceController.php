<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AttendanceController extends Controller
{
    public function startWork(Request $request)
    {
        if (Auth::check()) {
            return response()->json(['message' => '作業を開始しました。']);
        }

        return response()->json(['message' => '認証されていません。'], 401);
    }

    public function endWork(Request $request)
    {
        if (Auth::check()) {
            return response()->json(['message' => '作業を終了しました。']);
        }

        return response()->json(['message' => '認証されていません。'], 401);
    }
}
