<?php

namespace App\Http\Middleware;

use Closure;

class UserCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->session()->get('type') == 'User'){
            return $next($request);
        }
        else{
            $request->session()->flash('msg', 'Unauthorized request');
            return redirect()->route('login.index');
        }
    }
}
